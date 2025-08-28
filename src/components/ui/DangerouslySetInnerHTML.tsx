import React from 'react'
import { marked } from 'marked';


interface DangerouslySetInnerHTMLProps {
    data?: string;
}
export default function DangerouslySetInnerHTML({ data }: DangerouslySetInnerHTMLProps) {
    // Function to remove inline CSS (style attributes)
    const stripInlineStyles = (html: string) => {
        if (!html) return '';
        // Use regex to remove style attributes from all tags
        return html.replace(/ style="[^"]*"/g, '');
    };

    // Clean the HTML by removing inline styles
    const cleanedData = stripInlineStyles(data || '');
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: marked(cleanedData) || '' }} className="summer_text text_description" />
        </>
    )
}
export function DangerouslySetInnerHTMLTwo({ data }: DangerouslySetInnerHTMLProps) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: marked(data || '') }} className="summer_text text_description_two_lines" />
        </>
    )
}
export function DangerouslySetInnerHTMLFullText({ data }: DangerouslySetInnerHTMLProps) {
    // Function to remove inline CSS (style attributes)
    const stripInlineStyles = (html: string) => {
        if (!html) return '';
        // Use regex to remove style attributes from all tags
        return html.replace(/ style="[^"]*"/g, '');
    };

    // Clean the HTML by removing inline styles
    const cleanedData = stripInlineStyles(data || '');
    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: marked(cleanedData) }}
                className="summer_text"
            />
        </>
    );
}

export function DangerouslySetInnerHTMLThree({ data }: DangerouslySetInnerHTMLProps) {
    // Function to remove inline CSS (style attributes)
    const stripInlineStyles = (html: string) => {
        if (!html) return '';
        // Use regex to remove style attributes from all tags
        return html.replace(/ style="[^"]*"/g, '');
    };

    // Clean the HTML by removing inline styles
    const cleanedData = stripInlineStyles(data || '');
    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: marked(cleanedData) }}
                className="summer_text text_description_three_lines"
            />
        </>
    );
}
export function DangerouslySetInnerHTMLFive({ data }: DangerouslySetInnerHTMLProps) {
    // Function to remove inline CSS (style attributes)
    const stripInlineStyles = (html: string) => {
        if (!html) return '';
        // Use regex to remove style attributes from all tags
        return html.replace(/ style="[^"]*"/g, '');
    };

    // Clean the HTML by removing inline styles
    const cleanedData = stripInlineStyles(data || '');
    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: marked(cleanedData) }}
                className="summer_text text_description_five_lines"
            />
        </>
    );
}