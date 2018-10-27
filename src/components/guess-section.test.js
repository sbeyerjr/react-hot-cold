import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './header';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
});