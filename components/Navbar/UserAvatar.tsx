import { Icon } from "@iconify/react";
import {
  Avatar,
  Button,
} from "@nextui-org/react";

const UserAvatar = () => {
  return (
    <>
          <Button className="bg-white px-0" radius="full">
            <Avatar
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <p className="hidden lg:block">Jason Hughes</p>
            <Icon icon="uil:angle-down" width="1.4rem" height="1.4rem" />
          </Button>
    </>
  );
};

export default UserAvatar;
