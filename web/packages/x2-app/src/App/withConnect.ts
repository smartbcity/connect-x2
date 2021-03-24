import { connect } from "react-redux";
import { State } from "store";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    title: title.selectors.title(state),
    ssmList: ssm.selectors.ssmList(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
