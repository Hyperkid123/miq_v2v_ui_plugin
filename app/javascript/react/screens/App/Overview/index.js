import { connect } from 'react-redux';
import Overview from './Overview';
import * as OverviewActions from './OverviewActions';
import reducer from './OverviewReducer';
import {
  notStartedTransformationPlansFilter,
  activeTransformationPlansFilter,
  finishedTransformationPlansFilter
} from './OverviewSelectors';

export const reducers = { overview: reducer, form: {} };

const mapStateToProps = (
  { overview, overview: { transformationPlans } },
  ownProps
) => ({
  ...overview,
  ...ownProps.data,
  notStartedTransformationPlans: notStartedTransformationPlansFilter(
    transformationPlans
  ),
  activeTransformationPlans: activeTransformationPlansFilter(
    transformationPlans
  ),
  finishedTransformationPlans: finishedTransformationPlansFilter(
    transformationPlans
  )
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign(stateProps, ownProps.data, dispatchProps);

export default connect(mapStateToProps, OverviewActions, mergeProps)(Overview);
