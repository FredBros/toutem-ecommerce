import React, {useContext} from "react";
import { HiX } from "react-icons/hi";
import { Button, Tooltip } from "@nextui-org/react";
import { ShopContext } from "../../context/ShopContext";

type Props = {
  itemId: string;
};

const RemoveBtn = ({ itemId }: Props) => {
    const {onRemove} = useContext(ShopContext)
  return (
    <>
      <Tooltip content={"Remove from cart"} css={{ zIndex: "100000" }}>
        <Button
          bordered
          rounded
          auto
          color="error"
          flat
          css={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px", width: "30px", p: "0px"}}
          onPress={() => onRemove(itemId)}
        >
          <HiX size={"20px"} />
        </Button>
      </Tooltip>

      <style jsx>{``}</style>
    </>
  );
};

export default RemoveBtn;
