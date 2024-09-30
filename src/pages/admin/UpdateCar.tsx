import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../redux/api/carApi";

const UpdateCar = () => {
  const { id } = useParams<{ id: string }>(); // Get car id from the URL
  const { data: resData, isLoading } = useGetSingleCarQuery<any>(id!); // Fetch car data by id
  const [updateCar] = useUpdateCarMutation();
  const car = resData?.data;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, isDirty, isValid, errors },
    reset,
  } = useForm<FieldValues>({ mode: "onChange" });

  useEffect(() => {
    if (car) {
      // Pre-fill form with car data
      setValue("name", car.name);
      setValue("description", car.description);
      setValue("color", car.color);
      setValue("isElectric", car.isElectric);
      setValue("features", car.features);
      setValue("pricePerHour", car.pricePerHour);
      setValue("image", car.image);
    }
  }, [car, setValue]);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      await updateCar({ id, ...data }).unwrap();
      toast.success("Car updated successfully!");
      navigate("/admin/cars");
      reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update car");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Car</h2>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Car Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Car Name</label>
            <input
              type="text"
              {...register("name", { required: "Car name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message as string}
              </span>
            )}
          </div>

          {/* Car Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              required
            ></textarea>
            {errors.description && (
              <span className="text-red-600 text-sm">
                {errors.description.message as string}
              </span>
            )}
          </div>

          {/* Car Color */}
          <div>
            <label className="block text-sm font-semibold mb-2">Color</label>
            <input
              type="text"
              {...register("color", { required: "Color is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            {errors.color && (
              <span className="text-red-600 text-sm">
                {errors.color.message as string}
              </span>
            )}
          </div>

          {/* Electric Option */}
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              {...register("isElectric")}
              className="w-5 h-5"
            />
            <label className="block text-sm font-semibold mb-2">
              Is Electric
            </label>
          </div>

          {/* Car Features */}
          <div>
            <label className="block text-sm font-semibold mb-2">Features</label>
            <input
              type="text"
              placeholder="Enter feature and press Enter"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const feature = e.currentTarget.value;
                  if (feature) {
                    setValue("features", [
                      ...(watch("features") || []),
                      feature,
                    ]);
                    e.currentTarget.value = "";
                  }
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {watch("features")?.map((feature: string, index: number) => (
                <span
                  key={index}
                  className="mr-2 bg-blue-200 text-blue-700 rounded-md px-2 py-1 flex items-center space-x-2"
                >
                  {feature}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedFeatures = watch("features").filter(
                        (_: string, i: number) => i !== index
                      );
                      setValue("features", updatedFeatures);
                    }}
                    className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Price Per Hour */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Price Per Hour (USD)
            </label>
            <input
              type="number"
              {...register("pricePerHour", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            {errors.pricePerHour && (
              <span className="text-red-600 text-sm">
                {errors.pricePerHour.message as string}
              </span>
            )}
          </div>

          {/* Car Image */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Car Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            {errors.image && (
              <span className="text-red-600 text-sm">
                {errors.image.message as string}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-bold rounded-md transition-all duration-300 ${
                isDirty && isValid
                  ? "bg-[#004e92] text-white hover:bg-[#003b73]"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={isSubmitting || !(isDirty && isValid)}
            >
              {isSubmitting ? "Updating Car..." : "Update Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
