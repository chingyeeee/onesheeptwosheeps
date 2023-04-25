import { Box, Drawer } from "@mui/material";
import { ReactComponent as Menu } from "../assets/images/icons/icon-menu-sheep.svg";

const BrowserAlert = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer anchor='bottom' open={open} onClose={onClose}>
      <Box className='flex flex-col items-center w-full h-[100px]'>
        <Menu className='w-[70px]' />
        <p className='text-md pt-3'>請至預設瀏覽器取得最佳體驗</p>
      </Box>
    </Drawer>
  );
};
export default BrowserAlert;
