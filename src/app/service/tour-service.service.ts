import { Injectable } from '@angular/core';
import {Tours} from "../../models/Tours";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }
// const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  constructor() { }

   tours: Tours[] = [
       new Tours(1, 'Ha Noi', 3000 , "Hà Nội là thủ đô, thành phố trực thuộc trung ương và là một đô thị loại đặc biệt của Việt Nam. Hà Nội nằm về phía tây bắc của trung tâm vùng đồng bằng châu thổ sông Hồng, với địa hình bao gồm vùng đồng bằng trung tâm và vùng đồi núi ở phía bắc và phía tây thành phố. Với diện tích 3.358,6 km2 và dân số 8,25 triệu người (niên giám thống kê 2020)" ),
       new Tours(2,'Da Nang' ,4000,"Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.\n" +
         "\n" +
         "Thành phố Đà Nẵng là thành phố tổng hợp đa ngành, đa lĩnh vực; trung tâm chính trị - kinh tế - xã hội với vai trò là trung tâm công nghiệp, tài chính, du lịch, dịch vụ, văn hóa, giáo dục - đào tạo, y tế chất lượng cao, khoa học - công nghệ, khởi nghiệp, đổi mới sáng tạo của khu vực Miền Trung - Tây Nguyên và cả nước;" ),
       new Tours(3,'TP. HCM', 5000, "Thành phố Hồ Chí Minh (vẫn thường được gọi bằng tên cũ là Sài Gòn) là thành phố lớn nhất ở Việt Nam về dân số và quy mô đô thị hóa. Đây còn là trung tâm kinh tế, chính trị, văn hóa và giáo dục tại Việt Nam. Thành phố Hồ Chí Minh là thành phố trực thuộc trung ương thuộc loại đô thị đặc biệt của Việt Nam cùng với thủ đô Hà Nội.[" ),
    ]


delete(id: number): void {
  for (let i = 0; i < this.tours.length; i++) {
  if (id === this.tours[i].id) {
    this.tours.splice(i, 1);
  }
}
}

create(tour: Tours){
  let check=true;

  for (let i = 0; i < this.tours.length; i++) {
    if (this.tours[i].id === tour.id) {
      this.tours[i] = tour;
      check = false;
    }
  }

  if (check){
    this.tours.push(tour);
  }
}

  // getAll():Observable<Tours[]>{
  //   return this.httpClient.get<Tours[]>(apiUrl).pipe(
  //   )
  // }
  //
  // find(id:number):Observable<Tours>{
  //   return this.httpClient.get<Tours>(`${apiUrl}/${id}`).pipe(
  //   )
  // }
}
