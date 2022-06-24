import {
  CenterStyle,
  ContainerStyle,
  ItemsContainerStyle,
  LastChatTitleStyle,
  LeftStyle,
  RightStyle,
  SearchFriendStyle,
  WrapperStyle,
} from "../../_Styles_/messemger.style";
import MessageBox from "./MessageBox.component";
import UsersHadconvWith from "./UsersHadconvWith.component";
import UsersToChat from "./UsersToChat.component";
import { io, Socket } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { Ali } from "../../__FAKE_DATA/apiData";

const Messenger = () => {
  return (
    <ContainerStyle>
      <WrapperStyle>
        <LeftStyle>
          <ItemsContainerStyle>
            <SearchFriendStyle placeholder="Search for friends" />
            <UsersToChat />
          </ItemsContainerStyle>
        </LeftStyle>
        <CenterStyle>
          <ItemsContainerStyle>
            <MessageBox />
          </ItemsContainerStyle>
        </CenterStyle>
        <RightStyle>
          <ItemsContainerStyle>
            <LastChatTitleStyle>Last Chat</LastChatTitleStyle>
            <UsersHadconvWith />
          </ItemsContainerStyle>
        </RightStyle>
      </WrapperStyle>
    </ContainerStyle>
  );
};

export default Messenger;
