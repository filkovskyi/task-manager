import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Formik, Field, Form, Fieldset} from 'formik';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import {addTask} from '../actions/actions';
import {bindActionCreators} from 'redux';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    dirty,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="id"
        value={values.id}
        type="hidden"
      />
      <div className="form-group">
        <label htmlFor="clientName"> Client Name</label>
        <input
          className="form-control"
          id="clientName"
          placeholder="Enter client name"
          type="text"
          value={values.clientName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.clientName && touched.clientName && (<div className="text-danger">{errors.clientName}</div>)}
      </div>

      <div className="form-group">
        <label htmlFor="clientValue"> Client Job Value</label>
        <input
          className="form-control"
          id="clientValue"
          placeholder="Enter client job value"
          type="number"
          value={values.clientValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.clientValue && touched.clientValue && (<div className="text-danger">{errors.clientValue}</div>)}
      </div>

      <RadioButtonGroup
        id="gender"
        label="Chose gender please"
        value={values.gender}
        error={errors.gender}
        touched={touched.gender}
      >
        <Field
          component={RadioButton}
          name="gender"
          id="male"
          label="Male"
        />
        <Field
          component={RadioButton}
          name="gender"
          id="female"
          label="Female"
        />
      </RadioButtonGroup>

      <MySelect
        name="type"
        label="Job type"
        value={values.type}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.type}
        touched={touched.type}
      />

      <button
        type="button"
        className="btn btn-secondary btn-md mr-md-3"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button className="btn btn-primary btn-md" type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
};

const options_type = [
  {value: 'cube job', label: 'Cube Job'},
  {value: 'plain job', label: 'Plain Job'}
];

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={"radio-button"}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = (
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <div className="text-danger">{error}</div>}
      </fieldset>
    </div>
  );
};

// Custom select input
class MySelect extends Component {
  handleChange = value => {
    this.props.onChange('type', value);
  };

  handleBlur = () => {
    this.props.onBlur('type', true);
  };

  render() {
    return (
      <div className="form-group">
        <label className="text-capitalize" htmlFor={this.props.name}>{this.props.label}</label>
        <Select
          id={this.props.name}
          options={options_type}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error &&
        this.props.touched && (
          <div className="text-danger">{this.props.error}</div>
        )}
      </div>
    );
  }
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape(
    {
      clientName: Yup.string().required('Please input client name'),
      clientValue: Yup.number().required('Please input client job name'),
      gender: Yup.string().required('Please choose gender'),
      type: Yup.string().required('Please input client job type')
    }
  ),

  mapPropsToValues: props => ({
    clientName: '',
    clientValue: '',
    gender: '',
    type: '',
    id: new Date().valueOf()
  }),

  handleSubmit: (values, {props, setSubmitting }) => {
    const payload = {
      ...values,
      type: values.type.value
    };
    
    props.addTask(payload)

    setSubmitting(false);
  },

  displayName: 'TaskFrom'
});

const MyEnhancedForm = formikEnhancer(MyForm);

const mapDispatchToProps = dispatch => (bindActionCreators({addTask}, dispatch));

export default connect(null, mapDispatchToProps)(MyEnhancedForm);


