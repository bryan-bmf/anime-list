import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Link,
  AspectRatio,
  Circle,
} from "@chakra-ui/react";
import { Fragment } from "react";

const YTModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(props);

  //if no trigger, then it's trailer. else video section
  const trigger = props.trigger == undefined ? "here" : props.trigger;

  return (
    <Fragment>
      <Link onClick={onOpen}>{trigger}</Link>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bgColor='transparent' boxShadow='0'  maxW='45em'>
          <ModalHeader></ModalHeader>
          <ModalCloseButton bgColor={'cyan'} />
          <ModalBody>
            <AspectRatio w="640px" h="360px">
              <iframe title={props.title} src={props.link} allowFullScreen />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default YTModal;
