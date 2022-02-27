"use strict";
// class => object
// {mark: 'male', jade: 'male'} => s반
// {chloe: 'female', alex: 'male', anna: 'female'} => s1반
// indexable : 프로퍼티가 고정된 경우가 아니라 동적으로 프로퍼티가 생성되어야 할떄 사용 
class Students {
}
const s = new Students();
s.mark = "male";
s.jade = "male";
const s1 = new Students();
s1.chloe = "female";
s1.alex = "male";
s1.anna = "female";
console.log(s);
console.log(s1);
