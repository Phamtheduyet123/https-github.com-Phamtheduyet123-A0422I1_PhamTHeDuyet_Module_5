import {SanPham} from "./san-pham";

export interface LoHang {
  id?:number;
  maLoHhang?:string;
  sanPham?:SanPham;
  soLuong?:number;
  ngayNhapHang?:string;
  ngayXuatHang?:string;
  ngayHetHan?:string;
}
