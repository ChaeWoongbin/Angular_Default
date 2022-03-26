import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  intro=[    
      {'id':1, 'name':'수성못','description':'수성못은 대구광역시 수성구 두산동에 있는 못이다. 근교에 아르떼 수성랜드가 있다. 대구의 대표적인 명소이다.','image':'../../assets/korea_lake.jpg'}    ,
      {'id':2, 'name':'서문시장','description':'대구광역시 중구 대신동에 위치한 대구 최대의 전통시장. 대구 뿐만 아니라 전국에서도 손꼽힐 만한 대규모의 재래시장이다.','image':'../../assets/Dageu_market.jpg'}    ,
      {'id':3, 'name':'동성로','description':'대구광역시 최대 번화가 겸 랜드마크. 대구가 단핵 도심 체제라 대구 사람들에겐 시내(downtown)로 통하기도 하는 도심 번화가이다.','image':'../../assets/city_way.jpg'}    ,
      {'id':4, 'name':'혁신도시','description':'대구광역시 동구 각산동, 신서동, 동내동, 괴전동, 대림동, 사복동, 숙천동 일대 4,216,000㎡ 부지에 있는 혁신도시다.','image':'../../assets/building.jpg'} 
  ]
    
}
