import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

// ✅ ตัวอย่าง function ที่เรียกใช้ได้ง่าย
export const showSuccess = (message: string) => {
  MySwal.fire({
    icon: "success",
    title: "สำเร็จ",
    text: message,
    confirmButtonColor: "#f97316", // Tailwind orange-500
  });
};

export const showError = (message: string) => {
  MySwal.fire({
    icon: "error",
    title: "เกิดข้อผิดพลาด",
    text: message,
    confirmButtonColor: "#ef4444", // red-500
  });
};

export const showConfirm = async (message: string) => {
  const result = await MySwal.fire({
    title: "ยืนยันการทำรายการ",
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "ยืนยัน",
    cancelButtonText: "ยกเลิก",
    confirmButtonColor: "#f97316",
    cancelButtonColor: "#9ca3af",
  });

  return result.isConfirmed;
};


// ✅ Toast แบบทั่วไป (สำหรับ add to cart)
export const Toast = withReactContent(
  Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    background: "#ffffff", // พื้นหลังขาว
    color: "#00912e",      // สีข้อความ (เขียว)
    customClass: {
      popup: "shadow-lg rounded-lg", // เพิ่มเงาเล็กน้อย
    },
  })
);

// ✅ ฟังก์ชันเรียกใช้งานได้เลย
export const showAddToCartToast = (message: string) => {
  Toast.fire({
    icon: "success",
    title: message,
  });
};