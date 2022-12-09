import cn from "classnames";
import { useState } from "react";

import { ReactComponent as Pencil } from "./assets/icons/bi_pencil-fill.svg";
import { ReactComponent as Drawing } from "./assets/icons/drawing.svg";
import { ReactComponent as Market } from "./assets/icons/mdi_marker.svg";
import { ReactComponent as Notebook } from "./assets/icons/notebook.svg";
import { ReactComponent as ArrowDown } from "./assets/icons/arrow.svg";
import { ReactComponent as Dot } from "./assets/icons/dot.svg";
import { ReactComponent as DotChoose } from "./assets/icons/dot-selected.svg";

import pen1 from "./assets/images/pen-img-1.svg";
import pen2 from "./assets/images/pen-img-2.svg";
import pen3 from "./assets/images/pen-img-3.svg";

import gallery1 from "./assets/images/Gallery-1.svg";
import gallery2 from "./assets/images/Gallery-2.svg";
import gallery3 from "./assets/images/Gallery-3.svg";
import gallery4 from "./assets/images/Gallery-4.svg";
import gallery5 from "./assets/images/Gallery-5.svg";
import gallery6 from "./assets/images/Gallery-6.svg";
import gallery7 from "./assets/images/Gallery-7.svg";

const Tab = ({
  selected,
  id,
  title,
  category,
  saleOff,
  description,
  products,
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-150 rounded-3xl rounded-t-none",
        " px-5 py-10 xl:px-12.5 grid grid-cols-1",
        "xl:grid-cols-3 gap-7 xl:gap-x-9.5",
        selected !== id && "hidden"
      )}
    >
      <div className="text-center xl:text-start">
        <h4 className="font-normal xl:text-xl text-base xl:mb-5 mb-2.5">
          {title}
        </h4>
        <div className="grid grid-cols-2 xl:grid-cols-1 gap-x-5 pl-5">
          {category &&
            category.length &&
            category.map((e, index) => (
              <div
                key={index}
                className="font-semibold xl:text-lg text-black uppercase xl:leading-10 text-start text-xs list-item"
              >
                {e}
              </div>
            ))}
        </div>
        <button className="bg-yellow-350 rounded-md xl:flex items-center justify-center w-25 h-10 xl:w-30 xl:h-12.5 font-bold text-sm text-white uppercase mt-9 hidden">
          Shop all
        </button>
      </div>
      <div className="col-span-2 px-2.5 xl:px-0">
        <div className="rounded-2xl border-2.5 border-white">
          <div className="flex items-center">
            <div className="font-bold text-4xl leading-normal text-yellow-350 xl:bg-white py-3 xl:pl-10 pl-6 pr-0 xl:pr-7">
              {saleOff}%
              <span className="text-lg align-top xl:text-4xl xl:align-baseline">
                off
              </span>
            </div>
            <div className="xl:ml-6 ml-4 xl:font-light xl:text-2xl font-normal text-base">
              {description}
            </div>
          </div>
        </div>
        <div className="xl:mt-2.5 mt-10 grid xl:grid-cols-3 gap-5">
          {products &&
            products.length &&
            products.map((e, index) => (
              <div key={index} className="bg-white rounded-2xl px-5 py-2.5">
                <img src={e.src} alt={e.alt} className="mx-auto" />
                <div className="text-sm font-medium text-black text-center mt-3.5">
                  {e.name}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="font-semibold text-base">{e.newPrice}</div>
                  <div className="text-sm font-normal text-gray-150 ml-2.5">
                    {e.oldPrice}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button className="bg-yellow-350 rounded-md flex items-center justify-center w-25 h-10 mx-auto font-bold text-sm text-white uppercase mt-10">
          Shop all
        </button>
      </div>
    </div>
  );
};

const TabPanel = ({ Icon, selected, id, setSelected, label, children }) => {
  return (
    <div
      onClick={() => setSelected(id)}
      className={cn(
        "p-2.5 xl:p-8 xl:bg-white bg-neutral-150 cursor-pointer ",
        "xl:w-1/4 w-full mb-2.5 xl:my-0 rounded-2xl  xl:rounded-b-none",
        selected === id && "xl:bg-neutral-150 xl:rounded-t-3xl"
      )}
    >
      <div className="bg-white xl:p-6 px-7.5 xl:rounded-lg rounded-2xl shadow-sm flex items-center justify-between py-3 xl:justify-center">
        <div className="flex items-center xl:flex-col">
          <div className="bg-neutral-150 rounded-full xl:w-14.5 xl:h-14.5 w-12.5 h-12.5 flex justify-center items-center">
            {<Icon className="w-7 xl:w-auto" />}
          </div>
          <h6 className="ml-5 xl:ml-0 xl:mt-1 font-bold text-xl">{label}</h6>
        </div>
        <ArrowDown className="xl:hidden" />
      </div>
      <div className="xl:hidden">{children}</div>
    </div>
  );
};

const CardImage = ({ src }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

function App() {
  const [selected, setSelected] = useState(1);
  const currentData = {
    title:
      "Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.",
    category: [
      "MECHANICAL PENCILS",
      "ARCHITECT'S CHOICE",
      "EXECUTIVE PENCILS",
      "ENGRAVABLE PENCILS",
    ],
    saleOff: 25,
    description: "Offer Applicable on All Our Pencils",
    products: [
      {
        src: pen1,
        alt: "img1",
        name: "Aero Mechanical Pencil",
        newPrice: "$99.00",
        oldPrice: "$125.00",
      },
      {
        src: pen2,
        alt: "img2",
        name: "Castell Mechanical Pencil",
        newPrice: "$75.00",
        oldPrice: "$99.00",
      },
      {
        src: pen3,
        alt: "img3",
        name: "Architect Choice Pencil",
        newPrice: "$45.00",
        oldPrice: "$70.00",
      },
    ],
  };
  const gallerys = [
    gallery2,
    gallery4,
    gallery1,
    gallery3,
    gallery5,
    gallery6,
    gallery7,
  ];

  return (
    <div className="min-h-screen xl:pt-27">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-stretch">
          <TabPanel
            label="Pencils"
            selected={selected}
            setSelected={setSelected}
            id={1}
            Icon={Pencil}
          >
            <Tab
              id={1}
              selected={selected}
              title={currentData.title}
              category={currentData.category}
              saleOff={currentData.saleOff}
              description={currentData.description}
              products={currentData.products}
            />
          </TabPanel>
          <TabPanel
            label="Markers"
            selected={selected}
            setSelected={setSelected}
            id={2}
            Icon={Drawing}
          />
          <TabPanel
            label="Drawing Colors"
            selected={selected}
            setSelected={setSelected}
            id={3}
            Icon={Market}
          />
          <TabPanel
            label="Notebooks"
            selected={selected}
            setSelected={setSelected}
            id={4}
            Icon={Notebook}
          />
        </div>

        {/* Device extra large */}
        <div className="hidden xl:block">
          <Tab
            id={1}
            selected={selected}
            title={currentData.title}
            category={currentData.category}
            saleOff={currentData.saleOff}
            description={currentData.description}
            products={currentData.products}
          />
        </div>

        <div className="xl:flex items-center justify-center my-12.5 hidden">
          <DotChoose className="mr-4" />
          <Dot />
        </div>

        {/* Packer pen Gallery */}
        <h3 className="font-bold xl:text-5xl text-3xl text-center mt-12.5">
          Packer pen Gallery
        </h3>

        {/* Device extra large */}
        <div className="xl:grid hidden grid-cols-4 my-10">
          <div className="flex flex-col items-center justify-center">
            <img className="mb-3" src={gallerys[0]} alt="" />
            <img src={gallerys[1]} alt="" />
          </div>

          <div className="col-span-2 flex flex-col items-center justify-center">
            <img className="mb-3" src={gallerys[2]} alt="" />
            <img src={gallerys[3]} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <img className="mb-3" src={gallerys[4]} alt="" />
            <img className="mb-3" src={gallerys[5]} alt="" />
            <img className="mb-3" src={gallerys[6]} alt="" />
          </div>
        </div>

        {/* Devide small */}
        <div className="xl:hidden grid-cols-1 my-8 gap-2">
          <div className="grid grid-cols-2 gap-2 items-stretch">
            <div className="grid grid-cols-1 gap-2">
              <img src={gallerys[0]} alt="" />
              <img src={gallerys[1]} alt="" />
            </div>
            <CardImage src={gallerys[2]} />
          </div>

          <img className="my-2" src={gallerys[3]} alt="" />
          <CardImage src={gallerys[4]} />

          <div className="grid grid-cols-2 gap-2 items-stretch">
            <img src={gallerys[5]} alt="" className="h-max" />
            <CardImage src={gallerys[6]} />
          </div>
        </div>

        <div className="flex items-center justify-center my-2.5">
          <DotChoose className="mr-4" />
          <Dot />
        </div>
      </div>
    </div>
  );
}

export default App;
