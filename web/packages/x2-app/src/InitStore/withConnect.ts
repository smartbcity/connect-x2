import { connect } from "react-redux";
import { State } from "store";
import { protocols } from "store/protocols";

const mapStateToProps = (state: State) => ({
    protocols: protocols.selectors.protocols(state)
});

const mapDispatchToProps = {
    setProtocols: protocols.actions.setProtocols
};

export default connect(mapStateToProps, mapDispatchToProps);
