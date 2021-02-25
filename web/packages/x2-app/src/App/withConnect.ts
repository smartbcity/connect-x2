import { connect } from "react-redux";
import { State } from "store";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    title: title.selectors.title(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
