import { connect } from "react-redux";
import { State } from "store";
import { router } from "store/router";
import { protocols } from "store/protocols";
import { ssm } from "store/ssm";
import { title } from "store/title";

const mapStateToProps = (state: State) => ({
    protocols: protocols.selectors.protocols(state),
    sessionsList: ssm.selectors.sessionsList(state)
});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle,
    gotoSessionDetails: router.goto.sessionDetails,
    gotoSessions: router.goto.sessions,
    fetchSessions: ssm.queries.fetchSessions
};

export default connect(mapStateToProps, mapDispatchToProps);
