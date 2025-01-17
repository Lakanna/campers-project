import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import css from './Filters.module.css';
import Icon from '../Icon/Icon.jsx';
import { capitalizeFirstLetter } from '../../services/helpers.js';
import { FEATURE_KEYS } from '../../constants/campers.js';

export default function Filters({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        searchText: '',
        selectedOption: 'option1',
        selectedCategories: [],
      }}
      validationSchema={Yup.object({
        searchText: Yup.string().required('Поле для пошуку обов’язкове'),
      })}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor="searchText" className={css.inputLabel}>
              Location
            </label>
            <Field
              id="searchText"
              name="searchText"
              type="text"
              placeholder="Kyiv, Ukraine"
              className={css.input}
            />
            <Icon id="Map" width={20} height={20} className={css.mapIcon} />
          </div>

          <div>
            <p className={css.filtersLabel}>Filters</p>
            {/* Список кастомних чекбоксів */}
            <div>
              <h3>Vehicle equipment</h3>
              <ul className={css.iconsContainer}>
                {FEATURE_KEYS.map((feature, idx) => {
                  const isSelected =
                    values.selectedCategories.includes(feature); // Перевіряємо, чи вибраний цей елемент

                  return (
                    <li
                      key={idx}
                      className={`${css.featureLi} ${
                        isSelected ? css.selected : ''
                      }`} // Додаємо клас для активного стану
                      onClick={() => {
                        // Логіка додавання/видалення значення в масив
                        if (isSelected) {
                          setFieldValue(
                            'selectedCategories',
                            values.selectedCategories.filter(
                              (item) => item !== feature,
                            ),
                          );
                        } else {
                          setFieldValue('selectedCategories', [
                            ...values.selectedCategories,
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

            {/* Список радіокнопок */}
            <div>
              <h3>Vehicle type</h3>
              <label>
                <Field type="radio" name="selectedOption" value="option1" />
                Опція 1
              </label>
              <label>
                <Field type="radio" name="selectedOption" value="option2" />
                Опція 2
              </label>
              <label>
                <Field type="radio" name="selectedOption" value="option3" />
                Опція 3
              </label>
            </div>
          </div>

          {/* Кнопка для сабміту */}
          <button type="submit">Фільтрувати</button>
        </Form>
      )}
    </Formik>
  );
}
