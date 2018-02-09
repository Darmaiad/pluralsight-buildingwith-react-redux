import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-test-utils';
import ReactTestRenderer from 'react-test-renderer';
import CourseForm from './CourseForm';
import configure from './../../../tools/enzymeSetup';

const setup = (submitBtnSaving) => {
    const props = {
        course: {},
        saving: submitBtnSaving,
        errors: {},
        onSave: () => { },
        onChange: () => { },
        allAuthors: [],
    };

    return shallow(<CourseForm {...props} />);
};

describe('CourseForm via Enzyme 3 for React 16', () => {
    const wrapper = setup(false);

    it('Renders form and h1', () => {
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('Save button is labeled \'Save\' when not saving', () => {
        expect(wrapper.find('button').props().children).toBe('Save');
    });

    it('Save button is labeled \'Saving...\' when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('button').props().children).toBe('Saving...');
    });

});
