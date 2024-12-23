// utils/createLocalePath.ts
export default function createLocalePath(path: string, locale: string): string {
  // Regex kiểm tra xem `locale` đã có ở đầu URL chưa
  const regex = new RegExp(`^/${locale}(/|$)`);

  // Nếu `locale` đã có ở đầu URL, trả về `path` không thay đổi
  if (regex.test(path)) {
    return path;
  }

  // Nếu `locale` chưa có, thêm `locale` vào đầu URL
  return `/${locale}${path.startsWith("/") ? "" : "/"}${path}`;
}
