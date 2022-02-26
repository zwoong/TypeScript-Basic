interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const K: IKorean = {
    name: '최지웅',
    city: '서울',
};