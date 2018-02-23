// import expect from 'expect';
// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import configure from './../../../tools/enzymeSetup';
// // Named import of the class. We do not want the default import of the connected component
// import { ManageCoursePage } from './ManageCoursePage';

// describe('ManageCoursePage via Enzyme', () => {
//     // This was handled in mapStateToProps, but now we need to declare all the necessary props manually
//     const props = {
//         course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' },
//         authors: [],
//         actions: { saveCourse: () => Promise.resolve() },
//     };

//     it('Sets error message when trying to submit form with an empty title field', () => {
//         // shallow renders one level deep. We want mount that renders the full children dom of the component
//         const wrapper = mount(<ManageCoursePage {...props} />);
//         const saveBtn = wrapper.find('button').last();
//         expect(saveBtn.prop('type')).toBe('submit');
//         saveBtn.simulate('click');
//         expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
//     });
// });
