import { connect } from "react-redux";
import { State } from "store";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    ssmList: ssm.selectors.ssmList(state)
});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle
};

export default connect(mapStateToProps, mapDispatchToProps);
