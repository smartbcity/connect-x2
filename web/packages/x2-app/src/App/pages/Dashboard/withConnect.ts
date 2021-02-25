import { connect } from "react-redux";
import { title } from "store/title";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setTitle: title.actions.setTitle
};

export default connect(mapStateToProps, mapDispatchToProps);
