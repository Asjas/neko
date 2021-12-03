import { useState } from "react";
import CatalogueSpinModal from "../CatalogueSpinModal";
import { ZoomInIcon } from "@heroicons/react/solid";

export default function CatalogueItem({ url, spinUrl, name }: { url: string; spinUrl: string; name: string }) {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className="border-4 border-solid border-secondary">
      <a onClick={open} className="relative flex flex-col py-6 catalogue-item hover:cursor-pointer">
        <div className="aspect-w-16 aspect-h-9">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 hidden isolate icon-hover text-primary">
            <ZoomInIcon className="w-16 h-16 fill-current" />
          </div>
          <img className="Sirv" data-src={url} alt={name} />
        </div>
      </a>
      <div>
        <h2 className="py-2 m-0 text-center text-white bg-secondary font-base">{name}</h2>
        {showDialog ? <CatalogueSpinModal url={spinUrl} showDialog={showDialog} close={close} /> : null}
      </div>
    </div>
  );
}
