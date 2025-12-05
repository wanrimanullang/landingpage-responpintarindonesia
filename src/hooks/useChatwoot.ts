import { useEffect } from 'react';

declare global {
    interface Window {
        chatwootSDK?: {
            run: (config: {
                websiteToken: string;
                baseUrl: string;
            }) => void;
        };
        chatwootSettings?: {
            hideMessageBubble?: boolean;
            position?: 'left' | 'right';
            locale?: string;
            type?: 'standard' | 'expanded_bubble';
        };
    }
}

interface ChatwootConfig {
    websiteToken: string;
    baseUrl: string;
    hideMessageBubble?: boolean;
    position?: 'left' | 'right';
    locale?: string;
}

export function useChatwoot(config: ChatwootConfig) {
    useEffect(() => {
        // Set Chatwoot settings before loading the SDK
        window.chatwootSettings = {
            hideMessageBubble: config.hideMessageBubble || false,
            position: config.position || 'right',
            locale: config.locale || 'id',
            type: 'expanded_bubble',
        };

        // Create and load the Chatwoot SDK script
        const script = document.createElement('script');
        script.src = `${config.baseUrl}/packs/js/sdk.js`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (window.chatwootSDK) {
                window.chatwootSDK.run({
                    websiteToken: config.websiteToken,
                    baseUrl: config.baseUrl,
                });
            }
        };

        script.onerror = () => {
            console.error('Failed to load Chatwoot SDK');
        };

        // Append script to document
        document.body.appendChild(script);

        // Cleanup function
        return () => {
            // Remove script when component unmounts
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }

            // Remove Chatwoot widget
            const chatwootContainer = document.querySelector('.woot-widget-holder');
            if (chatwootContainer) {
                chatwootContainer.remove();
            }
        };
    }, [config.websiteToken, config.baseUrl, config.hideMessageBubble, config.position, config.locale]);
}
