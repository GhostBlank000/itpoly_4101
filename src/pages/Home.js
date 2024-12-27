import React from "react";

export default function Home() {
    const people = [
        {
        name: 'MissMayulee Chailangka',
        description: "นางสาวมยุลีย์ พงษ์บุพศิริกุล  หัวหน้าสาขางานเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg'
        },
        {
        name: 'MissNutthakan Pirom',
        description: "นางสาวณัฐกานต์ ภิรมณ์  รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
        {
        name: 'MissSawitta Pratoom',
        description: "นางสาวสวิตตา ประทุม  ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
        {
        name: 'MissThunyalak Kuntha',
        description: "นางสาวธัญญลักษณ์ กันธะ  ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg'
        },
        {
        name: 'Mr.Paisan N.Lampang',
        description: "นางสาวสวิตตา ประทุม  ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
    ];
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
            {people.map((person) => (
                <div className="col-span-1">
                    <Card
                        name={person.name}
                        description={person.description}
                        img={person.img}
                    />
                </div>
            ))}
        </div>
    );
}

function Card({name, description, img}){
    return(
        <div className="flex items-start gap-4">
            <img
                src={img}
                alt={name}
                className="size-20 rounded-lg object-cover"
            />
            <div className="text-start">
                <h3 className="text-lg/tight font-medium text-gray-900">{name}</h3>
                <p className="mt-0.5 text-gray-700"> {description} </p>
            </div>
        </div>
    );
}