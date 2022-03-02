import {ChaincodeId, ChannelId, ProtocolName, SessionName, SsmName, SsmUriDTO} from "ssm";
import {useParams} from "react-router";

export const useParamsSessionName = (): SessionName => {
    const { sessionName } = useParams<{ sessionName: string }>();
    return sessionName
}

export const useParamsSsmUri = (): SsmUriDTO => {
    const { channelId, chaincodeId, ssmName } = useParams<{ channelId: ChannelId, chaincodeId: ChaincodeId, ssmName: SsmName }>();
    return {
        uri: `ssm:${channelId}:${chaincodeId}:${ssmName}`
    }
}
export const useParamsProtocols = (): ProtocolName => {
    const { protocol } = useParams<{ protocol: ProtocolName }>();
    return protocol
}