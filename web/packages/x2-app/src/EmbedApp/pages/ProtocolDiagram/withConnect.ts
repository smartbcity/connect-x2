import { connect } from "react-redux";
import { State } from "store";
import { router } from "store/router";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    ssmList: ssm.selectors.ssmList(state)
});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle,
    gotoSessionDetails: router.goto.sessionDetails
};

export default connect(mapStateToProps, mapDispatchToProps);
