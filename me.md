
useEffect()

useEffect(callback,[deps])
Tham số 1 bắt buộc , tham số 2 là k bắt buộc

Có 3 trường hợp sử dụng useEffect()
    - useEffect(callback):
        + Gọi callback mỗi khi component re-Render
        + Gọi callback sau khi component được thêm vào DOM
    - useEffect(callback,[]):
        + Chỉ gọi callback 1 lần sau khi component mounted
    - useEffect(callback,[deps]):
        + [deps] có thể là 1 biến , props, state
        + callback gọi lại mỗi khi deps thay đổi

----------------------------
Lý thuyết chung của 3 trường hợp
-useEffect() được chạy khi component mounted
