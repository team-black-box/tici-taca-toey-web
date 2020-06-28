import React, { useState } from "react";
import QRCode from "react-qr-code";
import { GameInteractionTypes, GameStatus } from "../../common/model";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ShareProps {
  gameId: string;
  gameStatus: GameStatus;
}

const Share = ({ gameId, gameStatus }: ShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [interactionType, setInteractionType] = useState(
    gameStatus === GameStatus.WAITING_FOR_PLAYERS
      ? GameInteractionTypes.PLAY
      : GameInteractionTypes.SPECTATE
  );
  const url = `${window.location.origin}/${interactionType}/${gameId}`;
  return (
    <div className="relative">
      <div
        className={`
        ${
          isOpen
            ? "bg-blue-500 shadow-outline text-white"
            : "hover:bg-blue-500 hover:text-white hover:shadow-outline"
        } 
        text-center uppercase border-2 border-black cursor-pointer px-4 py-2 m-6 text-lg rounded-lg font-bold 
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        Invite <i className="fas fa-share-alt" />
      </div>
      {isOpen && (
        <div
          className="absolute rounded overflow-hidden shadow-lg bg-white"
          style={{ width: "256px", top: "80px", right: "25px" }}
        >
          <QRCode value={url} className="w-full" />
          <div className="text-center">
            {gameStatus === GameStatus.WAITING_FOR_PLAYERS && (
              <span
                className={`cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 ${
                  interactionType === GameInteractionTypes.PLAY
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setInteractionType(GameInteractionTypes.PLAY)}
              >
                Play
              </span>
            )}
            <span
              className={`cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                interactionType === GameInteractionTypes.SPECTATE
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setInteractionType(GameInteractionTypes.SPECTATE)}
            >
              Spectate
            </span>
          </div>
          <CopyToClipboard
            text={url}
            onCopy={() => {
              setCopied(true);
              setIsOpen(false);
              setTimeout(() => setCopied(false), 1000);
            }}
          >
            {copied ? (
              <div className="text-center uppercase border-2 cursor-pointer py-1 mx-4 my-2 text-lg rounded-lg font-bold bg-blue-500 text-white shadow-outline">
                Copied!
              </div>
            ) : (
              <div className="text-center uppercase border-2 border-black cursor-pointer py-1 mx-4 my-2 text-lg rounded-lg font-bold hover:bg-blue-500 hover:text-white hover:shadow-outline">
                Copy Link <i className="fas fa-link" />
              </div>
            )}
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Share;
