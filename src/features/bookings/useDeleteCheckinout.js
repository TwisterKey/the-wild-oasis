import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteCheckinout() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCheckoutin } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking succesfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCheckoutin };
}
