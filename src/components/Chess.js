import React from "react";
import { FaChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";

function Chess(){
    return(
        <div className="chess">
            <table>
                <tr className="white">
                    <td className="b"><FaChessRook /></td>
                    <td className="w"><FaChessKnight /></td>
                    <td className="b"><FaChessBishop /></td>
                    <td className="w"><FaChessKing /></td>
                    <td className="b"><FaChessQueen /></td>
                    <td className="w"><FaChessBishop /></td>
                    <td className="b"><FaChessKnight /></td>
                    <td className="w"><FaChessRook /></td>
                </tr>
                <tr className="white">
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                </tr>
                <tr>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                </tr>
                <tr>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                </tr>
                <tr>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                </tr>
                <tr>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                    <td className="w"></td>
                    <td className="b"></td>
                </tr>
                <tr className="black">
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                    <td className="b"><FaChessPawn /></td>
                    <td className="w"><FaChessPawn /></td>
                </tr>
                <tr className="black">
                    <td className="w"><FaChessRook /></td>
                    <td className="b"><FaChessKnight /></td>
                    <td className="w"><FaChessBishop /></td>
                    <td className="b"><FaChessQueen /></td>
                    <td className="w"><FaChessKing /></td>
                    <td className="b"><FaChessBishop /></td>
                    <td className="w"><FaChessKnight /></td>
                    <td className="b"><FaChessRook /></td>
                </tr>
            </table>
        </div>
    )
}
export default Chess;