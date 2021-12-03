import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";

export default function CatalogueSpinModal({
  url,
  showDialog,
  close,
}: {
  url: string;
  showDialog: boolean;
  close: () => void;
}) {
  return (
    <div>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <div className="aspect-w-16 aspect-h-9">
          <div className="Sirv" data-src={url} />
        </div>
      </Dialog>
    </div>
  );
}
