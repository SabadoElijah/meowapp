import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x5B2A52A4E1dB4A5b4eCD17C74a99358924e0E486",
        abi as any,
        signer
    );
}