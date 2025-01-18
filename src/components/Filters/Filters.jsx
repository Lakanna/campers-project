import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Filters.module.css';
import Icon from '../Icon/Icon.jsx';

import { capitalizeFirstLetter } from '../../services/helpers.js';
import { FEATURE_KEYS } from '../../constants/campers.js';
import { VEHICLE_TYPE } from '../../constants/campers.js';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filtersSlice.js';

export default function Filters() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(setFilters(values));
    actions.resetForm();
  };

  const locationValidation = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

  return (
    <Formik
      initialValues={{
        location: '',
        form: '',
        equipment: [],
      }}
      validationSchema={Yup.object({
        location: Yup.string().matches(
          locationValidation,
          'Location must be in the format: "Country, City"',
        ),
      })}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor="location" className={css.inputLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Field
                id="location"
                name="location"
                type="text"
                placeholder="Ukraine, Kyiv"
                className={css.input}
              />
              <Icon id="Map" width={20} height={20} className={css.mapIcon} />
            </div>
            <ErrorMessage
              name="location"
              component="div"
              className={css.error}
            />
          </div>

          <div>
            <p className={css.filtersLabel}>Filters</p>
            {/* Список кастомних чекбоксів */}
            <div>
              <h3 className={css.filtersName}>Vehicle equipment</h3>
              <ul className={css.iconsContainer}>
                {FEATURE_KEYS.map((feature, idx) => {
                  const isSelected = values.equipment.includes(feature);

                  return (
                    <li
                      key={idx}
                      className={`${css.featureLi} ${
                        isSelected ? css.selected : ''
                      }`}
                      onClick={() => {
                        // Логіка додавання/видалення значення в масив
                        if (isSelected) {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter((item) => item !== feature),
                          );
                        } else {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            feature,
                          ]);
                        }
                      }}
                    >
                      <Icon id={feature} width={32} height={32} />
                      <span>{capitalizeFirstLetter(feature)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className={css.filtersName}>Vehicle type</h3>
              <ul className={css.iconsContainer}>
                {VEHICLE_TYPE.map((type, idx) => (
                  <li key={idx} className={css.featureLi}>
                    <Field
                      type="radio"
                      name="form"
                      id={`vehicle-${idx}`}
                      value={type}
                      className={css.hiddenRadio}
                    />
                    <label htmlFor={`vehicle-${idx}`} className={css.label}>
                      <Icon id={type} width={32} height={32} />
                      {capitalizeFirstLetter(type).replace(
                        /([a-z])([A-Z])/g,
                        '$1 $2',
                      )}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}
