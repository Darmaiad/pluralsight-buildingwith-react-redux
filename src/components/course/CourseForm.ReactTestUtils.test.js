import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-test-utils';
import ReactTestRenderer from 'react-test-renderer';
import CourseForm from './CourseForm';

const setup = (submitBtnSaving) => {
    const props = {
        course: {},
        saving: submitBtnSaving,
        errors: {},
        onSave: () => { },
        onChange: () => { },
        allAuthors: [],
    };

    const renderer = ReactTestRenderer.create(<CourseForm {...props} />);
    const output = renderer.toJSON();

    return {
        props,
        output,
        renderer,
    };
};

describe('CourseForm via react-test-utils and react-test-renderer', () => {
    const { output } = setup();

    it('Renders elements: form and h1', () => {
        expect(output.type).toBe('form');
        const [firstElem] = output.children ;
        expect(firstElem.type).toBe('h1');  
    });

    it('Save button is labeled \'Save\' when not saving', () => {
        submitBtnExpectation(false, 'Save');
    });
    
    it('Save button is labeled \'Saving...\' when saving', () => {
        submitBtnExpectation(true, 'Saving...');
    });
    
    const submitBtnExpectation = (saving, msg ) => {
        const { output } = setup(saving);
        const submitButton = output.children[5];
        expect(submitButton.children[0]).toBe(msg);  
    };
});