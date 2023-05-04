import { Backdrop, Box, Dialog, DialogContent, Drawer } from "@mui/material";
import { getImageUrl } from "../utils/getImageUrl";

const BrowserAlert = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onClose}>
      <img src={getImageUrl("browserAlert", "browserAlert.svg")} className='px-5' />
    </Backdrop>
  );
};
export default BrowserAlert;
