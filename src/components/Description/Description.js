import React from 'react';
import cn from 'classnames';
import classes from './Description.module.scss';
import { feelBetterComparison, insightsComparison } from '../../utils/config';
import { Comparison } from '../Comparison/Comparison';

export const Description = () => {
    return (
        <section className={classes.description}>
            <h3 className={classes.description__title}>
                Choose the best plan for you
            </h3>
            <div className={classes.description__container}>
                <h3 className={classes.description__subtitle}>What you get</h3>
                <h3 className={classes.description__subtitle}>for free</h3>
                <h3 className={cn(
                    classes.description__subtitle,
                    classes.description__subtitle_gradient
                )}>
                    in Pro
                </h3>
            </div>
            <h3 className={cn(
                classes.description__title,
                classes.description__title_gradient
            )}>
                Feel better fast
            </h3>
            <div className={classes.description__wrapper}>
                {feelBetterComparison.map(({id, text, free, pro}) => {
                    return <Comparison
                        key={id}
                        text={text}
                        free={free}
                        pro={pro}
                    />
                })}
            </div>
            <h3 className={cn(
                classes.description__title,
                classes.description__title_gradient
            )}>
                Gain rich health insights
            </h3>
            {insightsComparison.map(({id, text, free, pro}) => {
                return <Comparison
                    key={id}
                    text={text}
                    free={free}
                    pro={pro}
                />
            })}
        </section>
    )
};
