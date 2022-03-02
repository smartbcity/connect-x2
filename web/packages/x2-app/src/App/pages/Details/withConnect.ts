import { connect } from "react-redux";
import { State } from "store";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    ssm: ssm.selectors.currentSsm(state),
    session: ssm.selectors.currentSession(state)
});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle,
    fetchSsm: ssm.queries.fetchSsm,
    fetchSession: ssm.queries.fetchSession
};

export default connect(mapStateToProps, mapDispatchToProps);
