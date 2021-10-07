import { connect } from "react-redux";
import {ssm} from "../../../store/ssm";
import {State} from "../../../store";

const mapStateToProps = (state: State) => ({
    ssmList: ssm.selectors.ssmList(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps);
