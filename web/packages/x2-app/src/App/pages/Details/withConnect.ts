import { connect } from "react-redux";
import { State } from "store";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    ssmList: ssm.selectors.ssmList(state),
    sessionsList: ssm.selectors.sessionsList(state)
});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle,
    fetchSessions: ssm.queries.fetchSessions
};

export default connect(mapStateToProps, mapDispatchToProps);
