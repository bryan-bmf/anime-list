import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  AspectRatio,
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
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio w="530px" h="360px">
              <iframe title={props.title} src={props.link} allowFullScreen />
            </AspectRatio>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default YTModal;
