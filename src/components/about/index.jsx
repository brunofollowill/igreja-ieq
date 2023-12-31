import AmostraImg from "../../../public/img/imagePastor.png";
import ScrollMotion from "../../utils/ScrollMotion";

const people = [
  {
    name: "Carlos Alberto Seliprandi",
    role: "Pastor Lider da Igreja",
    imageUrl: AmostraImg,
  },
  // More people...
];

export default function about() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <ScrollMotion>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SOBRE A NOSSA IGREJA
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              natus omnis iure reprehenderit aut eligendi, nostrum quibusdam
              minima saepe repellat id, dolores mollitia, accusantium quod!
              Magni temporibus repellat aliquam eveniet. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Dolorum natus omnis iure
              reprehenderit aut eligendi, nostrum quibusdam minima saepe
              repellat id, dolores mollitia, accusantium quod! Magni temporibus
              repellat aliquam eveniet. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorum natus omnis iure reprehenderit aut
              eligendi, nostrum quibusdam minima saepe repellat id, dolores
              mollitia, accusantium quod! Magni temporibus repellat aliquam
              eveniet.
            </p>
          </ScrollMotion>
        </div>
        <div>
          <ScrollMotion>
            <ul
              role="list"
              // className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt="Imagem do Pastor Carlos"
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollMotion>
        </div>
      </div>
    </div>
  );
}
