'use client'
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from 'react'
import AvatarInfos from "./avatarInfo";

const UserAvatar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    }

    return (
        <div className="flex">
            <div>
                <button className="border-[#838383] border-[3px] rounded-[15px]" onClick={handleOpen}>
                    <Avatar src="https://cdn.discordapp.com/attachments/1101672682338136098/1175399364647194674/discord-avatar-512-ZWMFS.png?ex=656b16f6&is=6558a1f6&hm=664d207388da077bf92e608eb0513287bc55f8ba1912d6fe32c0d91637b970aa&" className="w-20 h-20 text-large border-black border-[3px]" radius="lg" />
                </button>
            </div>
            <Modal className="bg-gradient-to-r p-1 from-[#c2c2c2] via-[#c2c2c2] to-[#c2c2c2] rounded-md" size='xs' backdrop="blur" isOpen={isOpen} placement="center" onClose={onClose} hideCloseButton={true} motionProps={
                {
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.1,
                                ease: "easeOut"
                            }
                        },
                        exit: {
                            y: 0,
                            opacity: 0,
                            transition: {
                                duration: 0.1,
                                ease: "easeIn"
                            }
                        }
                    }
                }
            }>
                <ModalContent className="bg-[#333333] rounded-[6px]">
                    {(onClose) => (
                        <>
                            <AvatarInfos />
                            <ModalHeader className="bg-[#818181] h-20">

                            </ModalHeader>
                            <ModalBody className="p-0 bg-[#333333]">
                                <div className=" p-3 m-5 mt-[4rem] rounded-md text-white bg-[#1d1d1d]">
                                    <h2 className="text-[20px] font-semibold" >Username</h2>
                                    <p className="text-[12px] text-[#b4b4b4]" >usertag#0000</p>
                                </div>


                            </ModalBody>
                        </>

                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default UserAvatar