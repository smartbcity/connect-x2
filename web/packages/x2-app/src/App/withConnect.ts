import { connect } from "react-redux";
import { State } from "store";
import { protocols } from "store/protocols";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    title: title.selectors.title(state),
    protocols: protocols.selectors.protocols(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
