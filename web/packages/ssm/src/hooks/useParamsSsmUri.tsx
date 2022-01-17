import {ChaincodeId, ChannelId, SsmName, SsmUriDTO} from "ssm";
import {useParams} from "react-router";

export const useParamsSsmUri = (): SsmUriDTO => {
    const { channelId, chaincodeId, ssmName } = useParams<{ channelId: ChannelId, chaincodeId: ChaincodeId, ssmName: SsmName }>();
    return {
        uri: `ssm:${channelId}:${chaincodeId}:${ssmName}`
    }
}