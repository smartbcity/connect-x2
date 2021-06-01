import { connect } from "react-redux";
import { State } from "store";
import { ssm } from "store/ssm";

const mapStateToProps = (state: State) => ({
    ssmList: ssm.selectors.ssmList(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps);