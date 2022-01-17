import {ChaincodeId, ChannelId, SsmUriDTO} from "ssm";
import {useParams} from "react-router";

export const useParamsChaincodeUri = (): SsmUriDTO => {
    const { channelId, chaincodeId } = useParams<{ channelId: ChannelId, chaincodeId: ChaincodeId }>();
    return {
        uri: `chaincode:${channelId}:${chaincodeId}`
    }
}